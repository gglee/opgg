import { useState } from 'react';

export default function useTabSummoners(defaultTab: string) {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState(defaultTab);

  return { visible, tab };
}
