import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NavigationFunctionComponent } from "react-native-navigation";
import { InfiniteData, useQuery, useQueryClient } from "react-query";
import { TopBarHeader } from "src/components/TopBarHeader";
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
    <LinearGradient
      colors={["#481E34", "#16192B"]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <TopBarHeader title={"Account & Wallet"} style={{marginTop:12}}/>
        <Text>Profile</Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
});

export default Profile;
