export function PaymentsResultPage() {
  const lectures = sessionStorage.getItem("buy_lectures");
  const name = sessionStorage.getItem("buy_username");
  return (
    <div>
      {name} 님 {lectures} 구매완료
    </div>
  );
}
