import { createClient } from "@supabase/supabase-js";
export default (channelName: string) => {
  const VotesArray = ref<[]>([]);

  const { supaBase_url, supaBase_key } = useRuntimeConfig();
  const supabase = createClient(supaBase_url, supaBase_key, {
    realtime: {
      params: {
        eventPerSecond: 30,
      },
    },
  });

  const channel = supabase.channel("db-vote");

  channel.on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "vote",
    },
    (payload) => {
      console.log(payload);
    }
  );

  const unsubScribe = () => channel.unsubscribe();
};
