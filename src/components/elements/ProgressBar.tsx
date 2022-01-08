import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number | "small" | "large";
};

export const ProgressBar: React.FC<Props> = React.memo(
  ({ style, color, loading, size }) => (
    <View style={[styles.progressBar, style]}>
      {loading ? (
        <ActivityIndicator
          style={{ backgroundColor: "transparent" }}
          color={color}
          size={size}
        />
      ) : null}
    </View>
  )
);

ProgressBar.defaultProps = {
  size: 24,
  color: "#6B778C",
  loading: true,
};

const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
