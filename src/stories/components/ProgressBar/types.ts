type Strength = 'weak' | 'medium' | 'strong' | 'great' | '';

export interface ProgressBarProps {
  descriptionTip: string;
  strength: Strength;
}

export interface StyledTips {
  strength: Strength;
}
