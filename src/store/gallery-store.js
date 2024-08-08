import '../constants.js'
import { makeAutoObservable,runInAction,observable,action } from "mobx";
import axios from "axios";

class GalleryStore{
    images=[];
    loading=false;
    error=null;

    constructor(){
        makeAutoObservable(this,{ 
            images: observable,
            loading: observable,
            error: observable,
            fetchImages: action,
            setImages: action,
            setLoading: action,
            setError: action,});
            this.startPolling();
    }

    async fetchImages() {
        this.loading = true;
        this.error = null;
        try {
          const response = await axios.get(axios.defaults.baseURL + `/items/Pictures`);
          const data = await response.data;
          runInAction(() => {this.images = data.data;})
        } catch (error) {
          this.error = error;
        } finally {
            runInAction(() => {this.loading = false})
        }
      }
      startPolling() {
        this.fetchImages();
        setInterval(() => {
          this.fetchImages();
        }, 5000); 
      }
}

const galleryStore = new GalleryStore();
export default galleryStore;