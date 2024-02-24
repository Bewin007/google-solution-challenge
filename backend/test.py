import pickle

# Load the pickled function
pickle_file_path = r'E:\google solution challenge\backend\backend\audiobook.pickle'
with open(pickle_file_path, "rb") as f:
    generate_audiobook = pickle.load(f)

# Prompt user for the target language
target_language = input("Enter the language code of the desired language: ")

# Path to the PDF file
pdf_path = r'E:\google solution challenge\backend\backend\upload\Physical_22-02-24_a8Nvfmj.pdf'

# Generate audiobook from the PDF text in the target language
audiobook_path = generate_audiobook(pdf_path, target_language)

print("Audiobook generated at:", audiobook_path)
