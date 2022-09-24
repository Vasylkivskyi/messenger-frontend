export class LocalStorageService {
  static setItem<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getItem(key: string) {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data as string);
    } catch {
      console.error("Failed to get data from local storage");
      return null;
    }
  }
}
