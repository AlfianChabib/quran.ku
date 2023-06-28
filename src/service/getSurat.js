import axios from "axios";
const getSuratData = async () => {
  try {
    const response = await axios.get("https://equran.id/api/v2/surat");
    return response.data.data;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return [];
  }
};

export default getSuratData;
