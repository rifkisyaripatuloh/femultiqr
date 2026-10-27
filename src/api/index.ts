import {api,ensureCsrfCookie} from './client'; import type {Paginated,PublicQrPage,QrPage,QrStats} from '@/types/qr'
export type AuthUser={id:number;name:string;email:string}; export const login=async(email:string,password:string)=>{await ensureCsrfCookie();return (await api.post<{data:AuthUser}>('/auth/login',{email,password})).data.data}; export const getMe=async()=> (await api.get<{data:AuthUser}>('/auth/me')).data.data; export const logout=()=>api.post('/auth/logout')
export const getQrPages=async(search:string,page:number)=> (await api.get<Paginated<QrPage>>('/qr-pages',{params:{search,page,per_page:10}})).data
export const getQrPage=async(id:string)=> (await api.get<{data:QrPage}>(`/qr-pages/${id}`)).data.data
export const createQrPage=async(payload:{title:string;description?:string})=> (await api.post<{data:QrPage}>('/qr-pages',payload)).data.data
export const updateQrPage=async(id:string,payload:Partial<Pick<QrPage,'title'|'description'|'status'>>)=> (await api.patch<{data:QrPage}>(`/qr-pages/${id}`,payload)).data.data
export const deleteQrPage=(id:string)=>api.delete(`/qr-pages/${id}`)
export const createLink=async(id:string,payload:object)=> (await api.post<{data:QrPage}>(`/qr-pages/${id}/links`,payload)).data.data
export const updateLink=async(id:string,linkId:string,payload:object)=> (await api.patch<{data:QrPage}>(`/qr-pages/${id}/links/${linkId}`,payload)).data.data
export const deleteLink=(id:string,linkId:string)=>api.delete(`/qr-pages/${id}/links/${linkId}`)
export const reorderLinks=async(id:string,ids:string[])=> (await api.put<{data:QrPage}>(`/qr-pages/${id}/links/reorder`,{ids})).data.data
export const getStats=async(id:string,period:string)=> (await api.get<{data:QrStats}>(`/qr-pages/${id}/stats`,{params:{period}})).data.data
export const getPublicQr=async(code:string)=> (await api.get<{data:PublicQrPage}>(`/public/qr/${code}`)).data.data

export type PublicGeneratorPayload={title:string;description?:string;links:Array<{label:string;icon_key:string;destination_url:string}>}; export type PublicGeneratorResult={code:string;qr_url:string;public_url:string}; export const generatePublicQr=async(payload:PublicGeneratorPayload)=> (await api.post<{data:PublicGeneratorResult}>('/public/generate',payload)).data.data
