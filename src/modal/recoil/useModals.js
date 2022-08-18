import {generateModalHook} from './generateModalHook';
import {
  basketModalState,
  letterModalState,
  orangeGoldModalState,
  orangeGreenModalState,
  orangeMandarinModalState,
  orangeMtModalState,
  orangeRedModalState,
  orangeSourModalState,
  orangeThousandModalState,
  orangeTinyModalState,
  deleteDiaryFolderModalState,
  deleteDiaryModalState,
  checkDeleteAllTasksModalState,
  exceedMaximumListModalState,
} from './modalStates';

export const useOrangeGoldModal = generateModalHook(orangeGoldModalState);
export const useOrangeGreenModal = generateModalHook(orangeGreenModalState);
export const useOrangeMandarinModal = generateModalHook(
  orangeMandarinModalState,
);
export const useOrangeMtModal = generateModalHook(orangeMtModalState);
export const useOrangeRedModal = generateModalHook(orangeRedModalState);
export const useOrangeSourModal = generateModalHook(orangeSourModalState);
export const useOrangeThousandModal = generateModalHook(
  orangeThousandModalState,
);
export const useOrangeTinyModal = generateModalHook(orangeTinyModalState);

export const useDeleteDiaryFolderModal = generateModalHook(
  deleteDiaryFolderModalState,
);

export const useDeleteDiaryModal = generateModalHook(deleteDiaryModalState);

export const useLetterModal = generateModalHook(letterModalState);
export const useBaksetModal = generateModalHook(basketModalState);
export const useCheckDeleteAllTasksModal = generateModalHook(
  checkDeleteAllTasksModalState,
);

export const useExceedMaximumListModal = generateModalHook(
  exceedMaximumListModalState,
);
