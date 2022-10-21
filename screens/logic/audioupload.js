import axios from "axios";

function uploadaudio(recording, setMood) {
  const payload = {
    audio: recording,
  };

  const a = axios
    .post(`/audio/`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
        Connection: "keep-alive",
        "Content-Length": Infinity,
      },
    })
    .then(async (response) => {

      setMood(response.data['final']);
      console.log(response.data['final'])
      // We set the returned token as the default authorization header

      // Navigate to the home screen
    })
    .catch((error) => console.log(error));
}

export default uploadaudio;
