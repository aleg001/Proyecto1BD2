import { ref } from 'vue'
import axios from 'axios'

export default function useUsuarios() {
  const url = "http://localhost:8000/api/usuarios"
  const usuariosData = ref([])
  const error = ref(null)
  // Get All Uusarios Data
  const getAllUsuarios = async () => {
    usuariosData.value = []
    error.value = null
    try {
      const res = await axios(url)
    //   console.log(res.data)
      usuariosData.value = res.data
    } catch (err) {
    //   console.log(err)
      error.value = err
    }
  }

  return {
    usuariosData,
    error,
    getAllUsuarios
  }
}