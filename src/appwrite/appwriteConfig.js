import config from "../config/config";
import { Client, ID, Storage, Databases, Queue } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
      this.databases = new Databases(this.client);
      this.bucket = new Storage(this.client);
  }
  async createDocument(collectionId, data) {
    try {
      return await this.databases.createDocument(collectionId, data);
    } catch (error) {
      throw error;
    }
  }
  async getDocuments(collectionId) {
    try {
      return await this.databases.listDocuments(collectionId);
    } catch (error) {
      throw error;
    }
  }
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(file);
    } catch (error) {
      throw error;
    }
  }
  async getFiles() {
    try {
      return await this.bucket.listFiles();
    } catch (error) {
      throw error;
    }
  }
  async createTask(data) {
    try {
      return await this.queue.createTask(data);
    } catch (error) {
      throw error;
    }
  }
  async getTasks() {
    try {
      return await this.queue.listTasks();
    } catch (error) {
      throw error;
    }
  }
  
}
const service = new Service();
export default service;
