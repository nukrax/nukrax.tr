// js/storage.js

/**
 * LocalStorage management for data persistence.
 */
const StorageManager = {
  /**
   * Save data to localStorage.
   * @param {string} key - The key for the data.
   * @param {any} value - The data to store.
   */
  save: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * Load data from localStorage.
   * @param {string} key - The key for the data.
   * @returns {any} - The retrieved data or null if not found.
   */
  load: function(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  /**
   * Remove data from localStorage.
   * @param {string} key - The key for the data.
   */
  remove: function(key) {
    localStorage.removeItem(key);
  },

  /**
   * Clear all data from localStorage.
   */
  clear: function() {
    localStorage.clear();
  }
};

export default StorageManager;