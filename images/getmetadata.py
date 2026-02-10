import os
import csv

def extract_parameters(filename):
    """Extracts parameters from the filename."""
    try:
        # Remove file extension
        name_without_extension = os.path.splitext(filename)[0]
        
        # Split the filename into parts
        parts = name_without_extension.split('_')
        
        # Ensure the correct number of parts
        if len(parts) == 5:
            person_id = parts[0]
            age_group = parts[1]
            gender = parts[2]
            emotion = parts[3]
            set_group = parts[4]
            return [filename, person_id, age_group, gender, emotion, set_group]
        else:
            raise ValueError(f"Expected 5 parts but got {len(parts)}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")
        return None

def main():
    # Get the current directory
    current_directory = os.getcwd()

    # Get a list of all JPG files
    jpg_files = [f for f in os.listdir(current_directory) if f.lower().endswith('.jpg')]

    # Prepare the CSV file
    output_file = 'image_metadata.csv'
    header = ['Image Name', 'Person ID', 'Age Group', 'Gender', 'Emotion', 'Set']

    with open(output_file, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(header)

        for jpg_file in jpg_files:
            data = extract_parameters(jpg_file)
            if data:
                writer.writerow(data)

    print(f"Metadata extracted and saved to {output_file}")

if __name__ == "__main__":
    main()
