const createKeys = (entity: string | undefined) => ({
  baseKey: entity,
  infinity: (params: unknown) => [entity, 'infinity', params],
  details: (params: unknown) => [entity, 'details', params],
});

export { createKeys };
