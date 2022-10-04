import axios from 'axios';

const post = async (url: string, body: {}, header?: any) => {
  console.log(url, body, header);
  try {
    const response: any = await axios.post(url, body, header);
    if (response) {
      if (response.bodyString) {
        return JSON.parse(response.bodyString).data;
      }
      return response;
    }
  } catch (error: any) {
    //errorHandler(error, url);
    handleError(error);
  }
};

const handleError = async (error: any) => {
  if (error && error.message === 'Request failed with status code 401') {
    console.log('Error');
  } else {
    throw error;
  }
};

export { post };
