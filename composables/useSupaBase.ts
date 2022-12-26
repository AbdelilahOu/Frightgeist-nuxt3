import { createClient } from "@supabase/supabase-js";

export default () => {
  const VotesArray = ref<any[]>([]);
  const channel = ref<any>();
  const supabase = ref<any>();

  onBeforeMount(() => {
    const { supaBase_url, supaBase_key } = useRuntimeConfig();
    supabase.value = createClient(supaBase_url, supaBase_key, {
      realtime: {
        params: {
          eventPerSecond: 30,
        },
      },
    });
  });

  const handleRowChnage = (payload: any) => console.log(payload);

  const SubToSingleRow = (questionId: number) => {
    channel.value = supabase.value
      .channel("*")
      .on("postgres_changes", { event: "*", schema: "*" }, handleRowChnage)
      .subscribe();
  };

  const UnsubFromChannel = () => channel.value?.unsubscribe();

  return {
    VotesArray,
    SubToSingleRow,
    UnsubFromChannel,
  };
};
