import { createClient } from "@supabase/supabase-js";

const { supaBase_url, supaBase_key } = useRuntimeConfig();

export const supabase = createClient(supaBase_url, supaBase_key);
