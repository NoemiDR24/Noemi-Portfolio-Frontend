import axios from 'axios';

const API_URL = 'http://localhost:8080/api/messages';

export const submitContactForm = async (contactData) => {
  try {
    const response = await axios.post(`${API_URL}`, contactData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};