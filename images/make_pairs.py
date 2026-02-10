import os
import csv
import random

def create_image_pairs(folder_path):
  """
  Creates a spreadsheet with image pairs for an eye-tracking experiment,
  including happy, sad, and neutral faces with expression labels. 
  Ensures no pairs have the same expression.

  Args:
    folder_path: The path to the folder containing the images.

  Returns:
    None. Saves a CSV file named 'image_pairs.csv' in the current directory.
  """

  image_files = [f for f in os.listdir(folder_path) if f.endswith('.jpg')]
  happy_faces = [f for f in image_files if '_h_' in f]
  sad_faces = [f for f in image_files if '_s_' in f]
  neutral_faces = [f for f in image_files if '_n_' in f]

  # Shuffle the lists to ensure random pairings
  random.shuffle(happy_faces)
  random.shuffle(sad_faces)
  random.shuffle(neutral_faces)

  # Create pairings, ensuring each face type is paired with each other type
  image_pairs = []
  for face1 in happy_faces:
    for face2 in sad_faces + neutral_faces: 
      image_pairs.append((face1, face2, 'happy', 'sad' if '_s_' in face2 else 'neutral'))
  for face1 in sad_faces:
    for face2 in happy_faces + neutral_faces:
      image_pairs.append((face1, face2, 'sad', 'happy' if '_h_' in face2 else 'neutral'))
  for face1 in neutral_faces:
    for face2 in happy_faces + sad_faces:
      image_pairs.append((face1, face2, 'neutral', 'happy' if '_h_' in face2 else 'sad'))

  # Write the pairings to a CSV file
  with open('image_pairs.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["imageleft", "imageright", "expression1", "expression2"])
    writer.writerows(image_pairs)

# Example usage:
folder_path = '.'  # Use the current directory
create_image_pairs(folder_path)