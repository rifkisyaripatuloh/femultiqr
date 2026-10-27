export type QrStatus = 'draft' | 'active' | 'paused'
export type IconKey = 'whatsapp' | 'instagram' | 'tiktok' | 'facebook' | 'youtube' | 'website' | 'custom'
export interface QrLink { id:string; token:string; label:string; icon_key:IconKey; destination_url:string; click_url:string; sort_order:number; is_active:boolean; total_clicks:number }
export interface QrPage { id:string; code:string; title:string; description:string|null; status:QrStatus; qr_url:string; total_scans:number; total_clicks:number; links:QrLink[]; created_at:string; updated_at:string }
export interface PublicQrLink { label:string; icon_key:IconKey; click_url:string; sort_order:number }
export interface PublicQrPage { code:string; title:string; description:string|null; links:PublicQrLink[] }
export interface Paginated<T> { data:T[]; meta:{current_page:number;last_page:number;per_page:number;total:number} }
export interface QrStats { period:'7d'|'30d'|'90d'; total_scans:number; total_clicks:number; period_scans:number; period_clicks:number; daily:Array<{date:string;scans:number;clicks:number}>; links:Array<{id:string;label:string;clicks:number}> }
