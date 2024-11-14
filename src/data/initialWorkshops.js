export const initialWorkshops = [
    {
      id: 1,
      title: 'Pengenalan Neural Networks',
      date: '2024-11-15',
      notes: `Materi yang dipelajari:
      
  1. Konsep Dasar Neural Network
  - Struktur dasar: input layer, hidden layer, output layer
  - Weights dan biases
  - Activation functions
  - Forward propagation
  
  2. Backpropagation
  - Konsep gradient descent
  - Chain rule
  - Weight updates
  
  3. Optimizers
  - Stochastic Gradient Descent (SGD)
  - Learning rate
  - Momentum
  
  4. Loss Functions
  - Mean Squared Error (MSE)
  - Cross Entropy Loss
  - Pemilihan loss function yang tepat`,
      resources: [
        {
          title: 'Neural Networks Explained',
          url: 'https://www.3blue1brown.com/topics/neural-networks'
        },
        {
          title: 'Backpropagation Tutorial',
          url: 'https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html'
        }
      ],
      quiz: [
        {
          question: 'Apa komponen dasar dari neural network?',
          options: [
            'Neuron, Weight, Bias',
            'CPU, RAM, GPU',
            'Database, Server, Client',
            'HTML, CSS, JavaScript'
          ],
          correct: 0
        },
        {
          question: 'Apa fungsi dari activation function?',
          options: [
            'Menambahkan non-linearitas ke model',
            'Mempercepat training',
            'Mengurangi memory usage',
            'Membuat model lebih kecil'
          ],
          correct: 0
        },
        {
          question: 'Bagaimana cara kerja gradient descent?',
          options: [
            'Mengupdate weights untuk meminimalkan loss function',
            'Menambah layer baru ke network',
            'Mengubah input data',
            'Menghapus neurons yang tidak penting'
          ],
          correct: 0
        }
      ]
    },
    {
      id: 2,
      title: 'Pengenalan Convolutional Neural Network (CNN)',
      date: '2024-11-15',
      notes: `Materi yang dipelajari:
  
  1. Konsep Dasar Kernel
  - Kernel adalah matriks bobot (weights) yang bisa di-update saat training
  - Kernel size dalam format tuple(n,n), contoh: (3,3), (4,4)
  
  2. Proses Konvolusi
  - Input patch * kernel = single output value
  - Step-by-step: ekstrak patch → kalikan dengan kernel → jumlahkan hasil → output
  
  3. Padding
  - Penambahan pixel di sekitar input image
  - Fungsi: menyimpan informasi tepi & mempertahankan dimensi spatial
  - Jenis: padding=0 (original), padding=1 (tambah border 1 pixel), dst
  
  4. Stride
  - Pergerakan kernel saat konvolusi
  - Stride=1 (geser 1 pixel), stride=2 (geser 2 pixel)
  
  5. Max Pooling
  - Mengambil nilai maksimum dari setiap window
  - Reduce dimensi sambil pertahankan fitur penting
  
  6. Feature Maps
  - Satu conv layer bisa punya multiple kernels
  - Setiap kernel menghasilkan 1 feature map
  - Layer awal: deteksi edges, textures
  - Layer tengah: patterns
  - Layer akhir: high-level features`,
      resources: [
        {
          title: 'Visualisasi Proses Konvolusi',
          url: 'https://cs231n.github.io/convolutional-networks/'
        },
        {
          title: 'PyTorch CNN Tutorial',
          url: 'https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html'
        }
      ],
      quiz: [
        {
          question: 'Apa fungsi utama dari kernel dalam CNN?',
          options: [
            'Matriks bobot yang dapat diupdate selama training',
            'Alat untuk mengkompresi gambar',
            'Program untuk menjalankan neural network',
            'Database untuk menyimpan gambar'
          ],
          correct: 0
        },
        {
          question: 'Bagaimana cara menghitung output size setelah konvolusi?',
          options: [
            '((N - F + 2P)/S) + 1',
            'N * F + P * S',
            'N + F - 2P / S',
            'N / (F + P * S)'
          ],
          correct: 0
        },
        {
          question: 'Apa fungsi dari padding dalam CNN?',
          options: [
            'Menyimpan informasi di tepi gambar dan mempertahankan dimensi spatial',
            'Memperkecil ukuran gambar',
            'Menghapus noise dari gambar',
            'Mengubah gambar menjadi hitam putih'
          ],
          correct: 0
        }
      ]
    },
    {
      id: 3,
      title: 'Implementasi CNN dengan PyTorch',
      date: '2024-11-15',
      notes: `Materi yang dipelajari:
  
  1. Setup Dataset & Transform
  - Menggunakan CIFAR10 dataset
  - Transform: ToTensor dan Normalize
  - Setup DataLoader dengan batch size dan shuffle
  
  2. Arsitektur Model
  - Input channels (RGB=3, Grayscale=1)
  - Convolution layers dengan kernel size berbeda
  - MaxPooling untuk reduce dimensi
  - Fully connected layers di akhir
  - Implementasi forward pass
  
  3. Training Process
  - Loss function: CrossEntropyLoss
  - Optimizer: SGD dengan learning rate dan momentum
  - Training loop: forward pass → compute loss → backward → update weights
  - Monitoring training progress dengan loss value
  
  4. Variasi Arsitektur
  - Model dengan 3 layer konvolusi
  - Model dengan 4 layer + padding
  - Model dengan kernel size berbeda
  - Perhitungan output size tiap layer`,
      resources: [
        {
          title: 'PyTorch CNN Implementation',
          url: 'https://pytorch.org/tutorials/beginner/blitz/neural_networks_tutorial.html'
        }
      ],
      quiz: [
        {
          question: 'Pada dataset CIFAR10, berapa jumlah input channels yang digunakan?',
          options: [
            '3 (RGB)',
            '1 (Grayscale)',
            '4 (RGBA)',
            '2 (Stereo)'
          ],
          correct: 0
        },
        {
          question: 'Mengapa kita menggunakan CrossEntropyLoss untuk training?',
          options: [
            'Cocok untuk klasifikasi multi-class dan sudah include softmax',
            'Lebih cepat prosesnya dibanding loss function lain',
            'Hanya bisa digunakan untuk gambar',
            'Karena mudah diimplementasikan'
          ],
          correct: 0
        },
        {
          question: 'Apa fungsi dari torch.flatten() dalam arsitektur CNN?',
          options: [
            'Mengubah feature maps menjadi vector untuk fully connected layer',
            'Mengurangi jumlah parameter',
            'Mempercepat training',
            'Menormalisasi data'
          ],
          correct: 0
        }
      ]
    }
  ];