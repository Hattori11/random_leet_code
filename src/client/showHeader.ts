export function showHeader(): void {
  const header = document.querySelector("leetcodes-section > header") as HTMLElement;
  header.classList.remove("hidden");
}