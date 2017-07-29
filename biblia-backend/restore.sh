psql -h localhost -d postgres -U postgres -p 5432 -q -f reset_db.sql \
psql -h localhost -d postgres -U postgres -p 5432 -q -f src/main/resources/nova_arquitera.sql
