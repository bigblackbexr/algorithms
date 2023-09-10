import sort from "@/components/algorithm.vue";

import accountsRoute from "./accounts";
import bubbleRoute from "./bubble";
import heapRoute from "./heap";
import insertionRoute from "./insertion";
import mergeRoute from "./merge";
import quicksortRoute from "./quicksort";
import radixRoute from "./radix";
import selectionRoute from "./selection";
import shellsortRoute from "./shellsort";

const sortCategory = [
  {
    path: '/sort',
    name: 'sort',
    component: sort,
    props: true
  },
  ...accountsRoute,
  ...bubbleRoute,
  ...heapRoute,
  ...insertionRoute,
  ...mergeRoute,
  ...quicksortRoute,
  ...radixRoute,
  ...selectionRoute,
  ...shellsortRoute,
];

export default sortCategory;
