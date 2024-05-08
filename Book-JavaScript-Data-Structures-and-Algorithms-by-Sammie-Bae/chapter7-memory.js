/*Việc hiểu về JavaScript Memory Management là rất quan trọng để phát triển các ứng dụng web hiệu quả và tránh các vấn đề như memory leaks.
 Dưới đây là một số kiến thức cơ bản về quản lý bộ nhớ trong JavaScript mà bạn cần nắm:

1. Garbage Collection: Trong JavaScript, bộ nhớ được quản lý thông qua việc thu gom rác (garbage collection).
Garbage collection là quá trình tự động xác định và giải phóng các đối tượng không được sử dụng nữa để giải phóng bộ nhớ.
2. Memory Lifecycle:
Stack: Stack là nơi lưu trữ các biến cục bộ và thực hiện các hàm trong JavaScript. Nó hoạt động theo nguyên tắc LIFO (Last-In-First-Out).
Heap: Heap là nơi lưu trữ các đối tượng và các biến được cấp phát động. Đối tượng trên Heap được thu gom bởi garbage collector khi không còn được tham chiếu.
Memory Leak: Memory leak xảy ra khi các đối tượng vẫn được giữ tham chiếu trong khi không còn được sử dụng nữa. Điều này dẫn đến việc tiêu tốn bộ nhớ không 
cần thiết và có thể gây ra hiệu suất ứng dụng kém.
3. Tham Chiếu và Không Tham Chiếu:
Các đối tượng trong JavaScript được giữ tham chiếu bởi các biến. Khi không có biến nào nữa tham chiếu đến một đối tượng nào đó, thì đối tượng đó sẽ trở thành 
vô hiệu và có thể được thu gom bởi garbage collector.
4. Cách Tránh Memory Leaks:
Giải phóng tham chiếu không còn sử dụng: Đảm bảo giải phóng tham chiếu đến các đối tượng khi chúng không còn cần thiết nữa.
Sử dụng thư viện và framework tốt: Các thư viện và framework JavaScript phổ biến thường có cơ chế tự động quản lý bộ nhớ tốt hơn.
5. WeakMap và WeakSet: Sử dụng WeakMap và WeakSet để lưu trữ các tham chiếu yếu (weak references), giúp tránh việc giữ tham chiếu 
dài hạn lên các đối tượng trong 
bộ nhớ.
6. Performance Optimization:
Để tăng hiệu suất và tránh memory leaks, hãy sử dụng các công cụ như Chrome DevTools để phân tích và theo dõi việc sử dụng bộ nhớ của ứng dụng.
Hiểu sâu hơn về cách JavaScript quản lý bộ nhớ sẽ giúp bạn viết mã hiệu quả hơn và tránh các vấn đề liên quan đến bộ nhớ trong các ứng dụng 
JavaScript của mình.
*/
