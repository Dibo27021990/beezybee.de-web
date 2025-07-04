// utils/marketing.js (Freunde-werben, SocialShare, Gutschein etc.)
import * as Sharing from 'expo-sharing';
export async function shareReferral(referralLink, msg) {
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(referralLink, { dialogTitle: msg });
  }
}
