import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: 'lkk4d792',
    dataset: 'production', // or your dataset name
    useCdn: false,
    apiVersion: '2023-05-03', // Use today's date or any recent date
    token: "skzoD2gqF9oOkCsv9pqkAv7S2PrA1nqYRoMhzGHPTE9jMcyvljMLwvOeTwx0fdQuIHnwXvlacpXuBZ9UlP5VIHNTGhrpfQkF71try6Kv04NJ1kyzISAum0MMBvQfU7j6xuOLahf17ThmcVwxKHOSCu0DNDDePbspq3FDDXXSsz2Rfx5V9BCr"})