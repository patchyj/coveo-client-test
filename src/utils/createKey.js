export default (string, i) => `${string.trim().toLowerCase().replace(/\s/g, '-')}_${i}`;
