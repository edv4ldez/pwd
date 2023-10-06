export function generatePassword(
  length: number,
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeSpecialChars: boolean
): string | null {
  // Define character sets for different types of characters
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Create a character set based on selected criteria
  let chars = lowercaseChars;
  if (includeUppercase) chars += uppercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSpecialChars) chars += specialChars;

  // Check if at least one character set is selected
  if (chars.length === 0) {
    console.error("At least one character set must be selected.");
    return null;
  }

  // Generate the random password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;
}
