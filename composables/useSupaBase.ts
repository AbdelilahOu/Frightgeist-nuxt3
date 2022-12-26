import { createClient, RealtimeChannel } from "@supabase/supabase-js";

export default () => {
  const VotesArray = ref<any[]>([]);
  const channel = ref<RealtimeChannel>();

  const { supaBase_url, supaBase_key } = useRuntimeConfig();

  const supabase = createClient(supaBase_url, supaBase_key, {
    realtime: {
      params: {
        eventPerSecond: 30,
      },
    },
  });

  const handleRowChnage = (payload: any) => console.log(payload);

  const SubToSingleRow = () => {
    channel.value = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Vote" },
        handleRowChnage
      )
      .subscribe();
  };

  const UnsubFromChannel = () => channel.value?.unsubscribe();

  return {
    VotesArray,
    SubToSingleRow,
    UnsubFromChannel,
  };
};
