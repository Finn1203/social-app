import { defineStore } from "pinia";

export const useCommonStore = defineStore('commonStore', {
    state: () => {
        return {
            mediaUrl: 'http://localhost:99/storage/'
        }
    }
});