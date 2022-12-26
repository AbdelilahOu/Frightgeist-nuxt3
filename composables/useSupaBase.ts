import { createClient } from "@supabase/supabase-js";

export default () => {
  const VotesArray = ref<any[]>([]);
  const channel = ref<any>();

  const { supaBase_url, supaBase_key } = useReatimeConfig();

  const supabase = createClient(supaBase_url, supaBase_key, {
    realtime: {
      params: {
        eventPerSecond: 30,
      },
    },
  });

  const handleChnage = (payload: any) => VotesArray.value.push(payload.new);

  const SubToChannel = (questionId: number) => {
    channel.value = supabase
      .channel("*")
      .on("postgres_changes", { event: "*", schema: "*" }, handleChnage)
      .subscribe();
  };

  const unsubFromChannel = () => channel.value?.unsubscribe();

  return {
    VotesArray,
    SubToChannel,
    unsubFromChannel,
  };
};
