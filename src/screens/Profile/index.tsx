import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationFunctionComponent } from "react-native-navigation";
import { InfiniteData, useQuery, useQueryClient } from "react-query";
import { fetchListGame } from "src/queries/ListGame/listGame.queries";

const Profile: NavigationFunctionComponent = () => {
  const { data: filters } = useQuery(["listgame"], () => fetchListGame(), {
    refetchOnMount: "always",
    refetchOnReconnect: false,
    retry: 3,
  });

  useEffect(() => {
    // const queryClient = useQueryClient();
    // const prevList = queryClient.getQueryData<InfiniteData<any[]>>(
    //   ["listgame"],
    //   {
    //     exact: true,
    //   }
    // );
  }, []);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
