import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../styles/Content.css";

const Content = () => (
  <main className="main-content">
    <section id="introduction">
      <h2>Introduction</h2>
      <p>
        PaddleOCR is a comprehensive Optical Character Recognition (OCR)
        toolkit. It supports multi-language text recognition, model
        fine-tuning, and deployment options. The toolkit is built on PaddlePaddle,
        an open-source deep learning platform. With a robust set of pre-trained models
        and easy-to-use APIs, PaddleOCR enables accurate text recognition across
        various applications such as document scanning, invoice processing, and more.
      </p>
    </section>

    <section id="installation">
      <h2>Installation</h2>
      <p>To install PaddleOCR, follow the steps below:</p>
      <SyntaxHighlighter language="bash" style={github}>
        {`git clone https://github.com/PaddlePaddle/PaddleOCR.git
cd PaddleOCR
pip install -r requirements.txt`}
      </SyntaxHighlighter>
      <p>
        Make sure to have Python (= 3.6) installed on your system along with
        the required dependencies such as PaddlePaddle and other libraries like
        PyTorch, OpenCV, and others listed in the `requirements.txt` file.
      </p>
      <p>
        If you're using a GPU, you can install PaddlePaddle with GPU support
        by following the instructions provided in the official documentation.
      </p>
    </section>

    <section id="dataset-preparation">
      <h2>Dataset Preparation</h2>
      <p>
        Before you begin training, ensure your dataset is properly formatted.
        The structure should include a folder of images and a corresponding label file.
      </p>
      <ul>
        <li><b>train_images/:</b> Contains all training images (JPEG, PNG, etc.).</li>
        <li><b>train_labels.txt:</b> A text file containing image filenames and corresponding ground truth labels in the specified format.</li>
      </ul>
      <p>
        Example of the label format in `train_labels.txt`:
      </p>
      <SyntaxHighlighter language="text" style={github}>
        {`image1.jpg, This is a sample label
image2.jpg, Another label text`}
      </SyntaxHighlighter>
      <p>
        The labels should match the images' contents and be correctly aligned.
      </p>
    </section>

    <section id="training">
      <h2>Training</h2>
      <p>To train the model, use the following command:</p>
      <SyntaxHighlighter language="bash" style={github}>
        {`python train.py -c configs/det/det_mv3_db.yml`}
      </SyntaxHighlighter>
      <p>
        This command will start the training process using the configuration
        file `det_mv3_db.yml`, which specifies various parameters like model
        architecture, learning rate, and training strategies.
      </p>
      <p>
        Make sure to monitor your training progress. You can use logging tools like TensorBoard
        or PaddlePaddle’s built-in logging features.
      </p>
    </section>

    <section id="evaluation">
      <h2>Evaluation</h2>
      <p>Once your model is trained, evaluate its performance using the following command:</p>
      <SyntaxHighlighter language="bash" style={github}>
        {`python eval.py -c configs/det/det_mv3_db.yml`}
      </SyntaxHighlighter>
      <p>
        This will compute metrics like accuracy, precision, recall, and F1 score
        to assess how well the model has learned to recognize text in your dataset.
      </p>
      <p>Example output:</p>
      <SyntaxHighlighter language="bash" style={github}>
        {`Evaluation Result: 
Accuracy: 98.76%
Precision: 98.45%
Recall: 98.50%
F1 Score: 98.47%`}
      </SyntaxHighlighter>
    </section>

    <section id="optimization">
      <h2>Optimization</h2>
      <p>
        To improve your model’s performance, you can optimize it using different techniques.
        You can adjust hyperparameters, switch optimizers, or experiment with different learning
        rates and batch sizes in the YAML configuration file.
      </p>
      <SyntaxHighlighter language="yaml" style={github}>
        {`Optimizer:
  type: Adam
  learning_rate: 0.001
  weight_decay: 0.0005`}
      </SyntaxHighlighter>
      <p>
        Additionally, techniques like model quantization, pruning, or using mixed-precision training
        can help improve inference speed and reduce model size.
      </p>
    </section>
    <section id="troubleshooting">
      <h2>Troubleshooting</h2>
      <p>If you encounter any issues during training or evaluation, consider the following:</p>
      <ul>
        <li><b>Issue:</b> Training not converging.
          <br/><b>Solution:</b> Reduce the learning rate, use a smaller batch size, or adjust the optimizer settings.
        </li>
        <li><b>Issue:</b> Poor evaluation results.
          <br/><b>Solution:</b> Ensure your dataset is clean, labeled correctly, and contains diverse examples of text.
        </li>
        <li><b>Issue:</b> Memory errors.
          <br/><b>Solution:</b> If using GPU, ensure there’s enough VRAM. Reduce batch size or use gradient checkpointing.
        </li>
      </ul>
    </section>

    <section id="advanced-configuration">
      <h2>Advanced Configurations</h2>
      <p>
        For more control over your training process, you can fine-tune other configurations in
        the YAML files, including:
      </p>
      <ul>
        <li><b>Data Augmentation:</b> Apply random rotations, scaling, and flipping to increase dataset diversity.</li>
        <li><b>Loss Functions:</b> Experiment with different loss functions to improve model robustness.</li>
        <li><b>Custom Networks:</b> Replace the default backbone with more advanced architectures like ResNet or EfficientNet.</li>
      </ul>
    </section>

    <section id="use-cases">
      <h2>Use Cases</h2>
      <p>PaddleOCR can be used in a variety of real-world applications, including:</p>
      <ul>
        <li><b>Document Scanning:</b> Automatically extract text from scanned documents, invoices, or receipts.</li>
        <li><b>License Plate Recognition:</b> Detect and recognize vehicle license plates from images or video.</li>
        <li><b>Text Recognition in Videos:</b> Extract text from video frames for automatic captioning or indexing.</li>
      </ul>
    </section>

    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>
        This guide covered the essentials of fine-tuning PaddleOCR, from dataset preparation to evaluation and optimization. 
        You can explore the official <a href="https://github.com/PaddlePaddle/PaddleOCR" target="_blank" rel="noopener noreferrer">documentation</a> for more advanced configurations and use cases.
      </p>
    </section>
  </main>
);

export default Content;
