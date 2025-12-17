 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/assets/js/main.js b/assets/js/main.js
index 9368d949b27109fe319104c92339ab1647093bbd..beed5f3d79b5fab7898674661694488215b8fd60 100644
--- a/assets/js/main.js
+++ b/assets/js/main.js
@@ -1,8 +1,20 @@
 document.addEventListener("DOMContentLoaded", () => {
   const helloBtn = document.getElementById("helloBtn");
   if (helloBtn) {
     helloBtn.addEventListener("click", () => {
       alert("Thanks for visiting! Feel free to reach out.");
     });
   }
+
+  const internalLinks = document.querySelectorAll('a[href^="#"]');
+  internalLinks.forEach((link) => {
+    link.addEventListener("click", (event) => {
+      const targetId = link.getAttribute("href")?.substring(1);
+      const target = targetId ? document.getElementById(targetId) : null;
+      if (target) {
+        event.preventDefault();
+        target.scrollIntoView({ behavior: "smooth", block: "start" });
+      }
+    });
+  });
 });
 
EOF
)
