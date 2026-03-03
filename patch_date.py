import re

with open('components/ui/scroll-expansion-hero.tsx', 'r') as f:
    text = f.read()

# 1. Remove the old date block inside Subtitle / Date div
text = re.sub(
    r"\{date && \(\s*<motion\.p\s*className=\"text-lg md:text-[^\n]+\[#E8E2D2\][^\n]+\"[^\n]*>\s*\{date\}\s*</motion\.p>\s*\)\}",
    "{/* date removed from here */}",
    text
)

# 2. Add the date block after the restOfTitle render below Foreground Typography Container
rest_str = r"""
                >
                  {restOfTitle}
                </motion.h2>

                {date && (
                  <motion.p
                    className="mt-6 md:mt-10 text-sm md:text-lg font-serif tracking-[0.4em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] uppercase z-10"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 - scrollProgress * 2 }}
                  >
                    {date}
                  </motion.p>
                )}
"""

text = re.sub(
    r">\s*\{restOfTitle\}\s*</motion\.h2>",
    rest_str,
    text
)

with open('components/ui/scroll-expansion-hero.tsx', 'w') as f:
    f.write(text)
