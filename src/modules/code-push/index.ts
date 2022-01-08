import CodePush from "react-native-code-push";

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
  mandatoryInstallMode: CodePush.InstallMode.ON_NEXT_RESTART,
  updateDialog: {
    appendReleaseDescription: true,
    title: "a new update is available!",
  },
};

const codePushStatusDidChange = (syncStatus: number) => {
  switch (syncStatus) {
    case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
      console.log({ syncMessage: "Checking for update." });
      break;
    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
      console.log({ syncMessage: "Downloading package." });
      break;
    case CodePush.SyncStatus.AWAITING_USER_ACTION:
      console.log({ syncMessage: "Awaiting user action." });
      break;
    case CodePush.SyncStatus.INSTALLING_UPDATE:
      console.log({ syncMessage: "Installing update." });
      break;
    case CodePush.SyncStatus.UP_TO_DATE:
      console.log({ syncMessage: "App up to date.", progress: false });
      break;
    case CodePush.SyncStatus.UPDATE_IGNORED:
      console.log({
        syncMessage: "Huỷ cài đặt.",
        progress: false,
      });
      break;
    case CodePush.SyncStatus.UPDATE_INSTALLED:
      console.log({
        syncMessage: "Khởi động lại ứng dụng để hoàn tất cài đặt.",
        progress: false,
      });
      break;
    case CodePush.SyncStatus.UNKNOWN_ERROR:
      console.log({
        syncMessage: "Hoàn tất cập nhật.",
        progress: false,
      });
      break;
  }
};
const codePushProcess = () => {
  CodePush.sync(CodePushOptions, codePushStatusDidChange);
};

export { codePushProcess };
