export const getCurrentAge = (birthday: Date): number => {
  const today = new Date();

  // 今年の誕生日の日付データを取得
  const currentYearBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate(),
  );

  // 生まれた年と今年の差を計算
  const age = today.getFullYear() - birthday.getFullYear();

  if (age < 0) {
    throw new Error("生年月日が不正です");
  }

  // 今日の日付と今年の誕生日を比較
  if (today < currentYearBirthday) {
    // 今年誕生日を迎えていない場合、1を引く
    return age - 1;
  }

  // 年齢の値を返す
  return age;
};
