import "react-native-get-random-values";
import { Database } from "@fenamnow/types/database";
import { Bucket } from "@fenamnow/types/files";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { isValidUrl } from "../utils/url";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});

export const getPublicUrl = (path: string, bucket?: Bucket) => {
  if (isValidUrl(path)) {
    return path;
  }
  if (bucket) {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return decodeURI(data.publicUrl);
  }

  return `${supabaseUrl}/storage/v1/object/public/${path}`;
};
