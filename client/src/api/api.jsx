// src/api/api.js
import axiosInstance from './axiosInstance'; // Adjust the import path as needed
import { checkAuthStatus } from './axiosInstance';

// Login function
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token); // Store the token in local storage
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Logout function
export const logout = async () => {
  try {
    await axiosInstance.post('/auth/logout');
    localStorage.removeItem('token'); // Remove the token from local storage
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

// Event CRUD operations
export const getEvents = async () => {
  try {
    const response = await axiosInstance.get('/events');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Fetching events failed');
  }
};

export const createEvent = async (eventData) => {
  try {
    const isAuthenticated = await checkAuthStatus();
    if (!isAuthenticated) {
      throw new Error('User not authenticated');
    }

    const response = await axiosInstance.post('/events', eventData, {
      headers: { 'Content-Type': 'multipart/form-data' }, // For file uploads
    });
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const updateEvent = async (id, event) => {
  try {
    const response = await axiosInstance.put(`/events/${id}`, event);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Updating event failed');
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axiosInstance.delete(`/events/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Deleting event failed');
  }
};

// Executive CRUD operations
export const getExecutives = async () => {
  try {
    const response = await axiosInstance.get('/executives');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Fetching executives failed');
  }
};

export const createExecutive = async (executive) => {
  try {
    const response = await axiosInstance.post('/executives', executive,{
      headers: { 'Content-Type': 'multipart/form-data' }, // For file uploads
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Creating executive failed');
  }
};

export const updateExecutive = async (id, executive) => {
  try {
    const response = await axiosInstance.put(`/executives/${id}`, executive);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Updating executive failed');
  }
};

export const deleteExecutive = async (id) => {
  try {
    const response = await axiosInstance.delete(`/executives/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Deleting executive failed');
  }
};

// Project CRUD operations
export const getProjects = async () => {
  try {
    const response = await axiosInstance.get('/projects');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Fetching projects failed');
  }
};

export const createProject = async (project) => {
  try {
    const response = await axiosInstance.post('/projects', project,{
      headers: { 'Content-Type': 'multipart/form-data' }, // For file uploads
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Creating project failed');
  }
};

export const updateProject = async (id, project) => {
  try {
    const response = await axiosInstance.put(`/projects/${id}`, project);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Updating project failed');
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await axiosInstance.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Deleting project failed');
  }
};

// Gallery CRUD operations
export const getGalleryItems = async () => {
  try {
    const response = await axiosInstance.get('/libraries');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Fetching gallery items failed');
  }
};

export const createGalleryItem = async (item) => {
  try {
    const response = await axiosInstance.post('/libraries', item,{
      headers: { 'Content-Type': 'multipart/form-data' }, // For file uploads
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Creating gallery item failed');
  }
};

export const updateGalleryItem = async (id, item) => {
  try {
    const response = await axiosInstance.put(`/libraries/${id}`, item);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Updating gallery item failed');
  }
};

export const deleteGalleryItem = async (id) => {
  try {
    const response = await axiosInstance.delete(`/libraries/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Deleting gallery item failed');
  }
};

