   upstream myapp1 {
        least_conn;
        server http://10.4.73.133:3014;
        server http://10.4.17.213:3015;
        server http://1.1.1.1;
    }
