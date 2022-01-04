import { QueryClient } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { QUERY_CLIENT_PERSIST_KEY_STORE } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersistor } from 'react-query/createAsyncStoragePersistor-experimental';
import { dehydrate, hydrate } from 'react-query/hydration';
import { Platform } from 'react-native';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 1000 * 60 * 60 * 12, // 12 hours
    },
  },
});

const clearQueryCache = () => {
  client.clear();
};

const configureClient = () => {
  const asyncStoragePersistor = createAsyncStoragePersistor({
    key: QUERY_CLIENT_PERSIST_KEY_STORE,
    storage: AsyncStorage,
    throttleTime: Platform.OS === 'ios' ? 2000 : 5000,
  });

  persistQueryClient({
    queryClient: client,
    persistor: asyncStoragePersistor,
    maxAge: 1000 * 60 * 60 * 12, // 12 hours in milliseconds
  }).then(() => {
    // If the mutation has been paused because the device is for example offline,
    // Then the paused mutation can be dehydrated when the application quits:
    const state = dehydrate(client, {
      dehydrateQueries: true,
      dehydrateMutations: true,
    });

    // The mutation can then be hydrated again when the application is started:
    hydrate(client, state);

    // Resume the paused mutations:
    client.resumePausedMutations();
  });

  return { client };
};

export { configureClient, clearQueryCache, client };
