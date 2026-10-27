import axios from 'axios'
export const api = axios.create({baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api/v1', withCredentials:true, withXSRFToken:true, headers:{Accept:'application/json'}})
export const ensureCsrfCookie = async () => { await axios.get('/sanctum/csrf-cookie',{withCredentials:true}) }
export const messageFromError = (error: unknown) => { if(axios.isAxiosError(error)){ const data=error.response?.data as {message?:string;errors?:Record<string,string[]>}|undefined; return data?.message ?? (error.response?.status===419?'Sesi keamanan kedaluwarsa. Coba lagi.':'Terjadi gangguan. Coba lagi.') } return 'Terjadi gangguan. Coba lagi.' }
