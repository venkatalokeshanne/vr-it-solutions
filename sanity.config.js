import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "@/sanity";

// Custom logo component
const Logo = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      fontWeight: 'bold',
      fontSize: '1.25rem',
      gap: '0.5rem'
    }}>
      <div style={{
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.375rem',
        color: 'white'
      }}>
        NC
      </div>
      <div>
        <span style={{ color: '#1f2937' }}>VRIT</span>
        <span style={{ 
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Solutions
        </span>
      </div>
    </div>
  );
};

export default defineConfig({
  name: "default",
  title: "VRIT Solutions",
  
  projectId: "lkk4d792",
  dataset: "production",
  
  studio: {
    components: {
      logo: Logo
    }
  },
  
  plugins: [
    deskTool(),
    visionTool(),
    codeInput(),
  ],
  
  schema: {
    types: schemaTypes,
  },
});