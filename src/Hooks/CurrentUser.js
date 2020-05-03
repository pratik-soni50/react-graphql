import { getCurrentUser } from "../utils/AuthHelper";

let currentUser = null;

export default function useCurrentUser() {
  try {
    if (!currentUser) {
      currentUser = getCurrentUser();
    }
    return currentUser;
  } catch {
    return currentUser;
  }
}
