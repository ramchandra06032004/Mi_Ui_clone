import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        scanner.nextLine();  // consume newline left-over
        String[] files = new String[N];
        for (int i = 0; i < N; i++) {
            files[i] = scanner.nextLine();
        }
        String target = scanner.nextLine();
        binarySearch(files, target);
    }

    public static void binarySearch(String[] files, String target) {
    int left = 0;
    int right = files.length - 1;
    String lastChecked = null;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        lastChecked = files[mid];
        int res = target.compareToIgnoreCase(files[mid]);
        if (res == 0) {
            System.out.println(lastChecked);
            System.out.println("FOUND");
            return;
        }
        if (res > 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    System.out.println(lastChecked);
    System.out.println("NOT-FOUND");
}
}