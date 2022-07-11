function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  throw new Error('Request was either a 404 or 500');
}

export default checkStatus;