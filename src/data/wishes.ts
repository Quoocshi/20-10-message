export const WISHES: string[] = [
  "Bạn có cái duyên ngầm mà không phải ai sinh ra cũng có được.",
  "Nụ cười của bạn chính là điều dịu dàng và ấm áp nhất ngày hôm nay.",
  "Chúc bạn luôn rực rỡ như hoa mùa hạ và an yên như một chiều thu trong veo.",
  "Mỗi bước đi của bạn đều mang theo nguồn năng lượng tích cực và sự tự tin đáng ngưỡng mộ.",
  "Phụ nữ sinh ra là để được yêu thương, hãy luôn nâng niu và trân trọng chính mình.",
  "Chúc bạn 20/10 ngập tràn niềm vui, công việc như ý và tâm hồn luôn thảnh thơi.",
  "Khí chất và sự tử tế chính là món trang sức lộng lẫy nhất của người phụ nữ.",
  "Mong rằng thế giới này sẽ luôn đối xử với bạn bằng sự dịu dàng và chân thành nhất.",
  "Chúc bạn một ngày 20/10 nhận được thật nhiều hoa, nhiều quà và ngập tràn hạnh phúc.",
  "Cảm ơn bạn vì đã luôn hiện diện và mang đến những điều kỳ diệu cho những người xung quanh.",
  "Chúc bạn luôn giữ được ngọn lửa đam mê, độc lập và tỏa sáng theo cách riêng của mình.",
  "Hạnh phúc không ở đâu xa, chúc bạn tìm thấy an yên trong từng khoảnh khắc giản đơn nhất."
];

/**
 * Lấy ngẫu nhiên một lời chúc khác với lời chúc hiện tại
 */
export function getNextRandomWish(currentWish: string, list: string[] = WISHES): string {
  if (list.length <= 1) return list[0] || "";
  const remaining = list.filter((w) => w !== currentWish);
  const randomIndex = Math.floor(Math.random() * remaining.length);
  return remaining[randomIndex];
}
