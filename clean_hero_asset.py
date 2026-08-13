import os
from PIL import Image
import numpy as np

def process_hero_asset():
    input_path = 'frontend/public/hero_avatar_3d.png'
    img = Image.open(input_path).convert('RGBA')
    arr = np.array(img, dtype=np.float32)
    
    rgb = arr[:, :, :3]
    alpha = arr[:, :, 3] / 255.0
    
    # Background color of original studio shot (measured from edge background pixels)
    bg_color = np.array([55.0, 58.0, 66.0], dtype=np.float32)
    
    # Clean tiny alpha noise (< 0.05) -> 0
    alpha_clean = np.where(alpha < 0.05, 0.0, alpha)
    
    # Unmix background color from semi-transparent fringe pixels
    # For pixels where alpha > 0, C_unmix = (C_obs - (1 - alpha) * B) / alpha
    unmixed_rgb = np.zeros_like(rgb)
    for c in range(3):
        c_unmixed = (rgb[:, :, c] - (1.0 - alpha_clean) * bg_color[c]) / np.maximum(alpha_clean, 0.001)
        unmixed_rgb[:, :, c] = np.clip(c_unmixed, 0, 255)
        
    out_arr = np.zeros_like(arr, dtype=np.uint8)
    out_arr[:, :, :3] = np.round(unmixed_rgb).astype(np.uint8)
    out_arr[:, :, 3] = np.round(alpha_clean * 255.0).astype(np.uint8)
    
    out_img = Image.fromarray(out_arr, mode='RGBA')
    
    # Save clean asset to public and dist
    out_img.save('frontend/public/hero_avatar_3d.png', 'PNG', optimize=True)
    if os.path.exists('frontend/dist'):
        out_img.save('frontend/dist/hero_avatar_3d.png', 'PNG', optimize=True)
    print("Cleaned hero_avatar_3d.png saved successfully!")

process_hero_asset()
