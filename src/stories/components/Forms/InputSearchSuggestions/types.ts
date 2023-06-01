import { SyntheticEvent } from 'react';

export interface InputSearchAutocompleteProps {
  placeholder: string;
  loadingText?: string;
  noOptionsText?: string;
  suggestions: Suggestions[];
  isLoading?: boolean;
  onInputChange: (e: SyntheticEvent<Element, Event>, newValue: string) => void;
  onChange: (e: SyntheticEvent<Element, Event>, newValue: Suggestions | null) => void;
}

export interface Suggestions {
  text: string;
  value: Record<string, unknown> | string | number;
}
